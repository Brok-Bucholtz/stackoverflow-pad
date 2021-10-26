```
docker build -t stackoverflow-pad/question_python .
docker run -it -w /app/ -v $(pwd):/app/ stackoverflow-pad/question_python python main.py
```
