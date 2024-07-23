# Usar uma imagem base oficial do Python
FROM python:3.9-slim

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos diretório de trabalho
COPY . .

# Instalar as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Expor a porta que a aplicação irá rodar
EXPOSE 8000

# Comando para rodar a aplicação
CMD ["gunicorn", "--log-level", "debug", "api:app"]
