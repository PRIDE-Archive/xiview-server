FROM python:3.10-slim as build-stage

# Setup environment
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONFAULTHANDLER=1 \
    FLASK_DEBUG=production

# Install system-level build tools and Python headers
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    build-essential \
    python3-dev \
    libffi-dev \
    libssl-dev \
    libxml2-dev \
    libxslt1-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip and install pipenv
RUN pip install --upgrade pip wheel && pip install pipenv

# Copy Python requirements
COPY Pipfile .
COPY Pipfile.lock .

# Print Python version for debugging
RUN python --version && pip --version && gcc --version

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
