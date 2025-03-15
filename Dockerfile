FROM python:3.12-alpine

LABEL org.opencontainers.image.source=https://github.com/jamie-mh/flaskvite
LABEL name=flaskvite

RUN python -m venv /venv
COPY ./requirements.txt /venv/requirements.txt
RUN /venv/bin/pip install --no-cache-dir --upgrade -r /venv/requirements.txt

COPY ./flaskvite /app/flaskvite
WORKDIR /app

CMD ["/venv/bin/gunicorn", "--conf", "flaskvite/gunicorn_conf.py", "--bind", "0.0.0.0:8000", "flaskvite:create_app()"]
