FROM python:3.8.1

WORKDIR /setup/
ADD requirements.txt /setup/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
RUN rm -fr /setup/
