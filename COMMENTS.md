# Comments

- Primeiro passo estou organizando o projeto para trabalhar em container e testar a aplicação local.
- Estou pensando em usar o KIND para criar um Cluster Kubernetes. Ainda nao pensei na pipeline e na entrega desse repo, mas quero que a ideia seja fácil de testar e subir em qualquer maquina.
- Para criar o cluster seguindo o IAC, vou criar um terraform usando p provider do kind para criar o cluster local.
- Para isso eu configurei um Taskfile que contem todos os comando do terraform para criar a infraestrutura necessária.
- Segui com a pipeline local por assim dizer, configurando no task o build o release(imagem) num docker Hub publico. e depois a aplicação dos manifestos do kubernetes, e assim completando o delivery da aplicação.
- criei uma task para destruir todo o ambiente também.
