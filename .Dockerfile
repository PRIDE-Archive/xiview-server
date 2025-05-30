FROM python:3.9-slim AS build-stage

# Setup environment
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONFAULTHANDLER=1 \
    FLASK_DEBUG=production

COPY *.whl .
# Install system-level build tools and Python headers
RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    libffi-dev \
    libssl-dev \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip and install pipenv
RUN pip install --upgrade pip wheel && pip install pipenv
RUN pip install --force-reinstall "cython==3.0.*"

# Copy Python requirements
COPY Pipfile .
COPY Pipfile.lock .

# Print Python version for debugging
RUN python --version

# Install Python dependencies using pipenv
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --system

# Run a test import to trigger Cython compilation (optional)
RUN echo 'from xisearch2.cython import *' | python || true

# Create non-root user and switch to it
RUN useradd --create-home appuser
WORKDIR /home/appuser
USER appuser
RUN mkdir -p /home/appuser/logs

# Copy application source code
COPY static ./static
COPY templates ./templates
COPY tests ./tests
COPY xiview_server ./xiview_server
COPY .env .
COPY default.database.ini .
COPY logging.ini .
COPY .kubernetes.yml .

# Run the application
ENTRYPOINT ["waitress-serve", "--port", "${PORT}", "--url-prefix", "${URL_PREFIX}", "--call", "${APP_ENTRY}"]