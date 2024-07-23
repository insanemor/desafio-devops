# Comments

- Primeiro passo estou organizando o projeto para trabalhar em container e testar a aplicação local.
- Estou pensando em usar o KIND para criar um Cluster Kubernetes. Ainda nao pensei na pipeline e na entrega desse repo, mas quero que a ideia seja fácil de testar e subir em qualquer maquina.
- Para criar o cluster seguindo o IAC, vou criar um terraform usando p provider do kind para criar o cluster local.
- Para isso eu configurei um Taskfile que contem todos os comando do terraform para criar a infraestrutura necessária.
- Segui com a pipeline local por assim dizer, configurando no task o build o release(imagem) num docker Hub publico. e depois a aplicação dos manifestos do kubernetes, e assim completando o delivery da aplicação.
- criei uma task para destruir todo o ambiente também.

## Justificativas

A ideia aqui foi fazer tudo de forma que fosse possível testar localmente e de forma rápida e sem complicações de ambientes. para isso eu escolhi como infra local o kubernetes pelo KIND, assim seria fácil e rápido, para representar uma pipeline eu escolhi o TASKFILE que e versátil e rápido em operações locais, na hora da imagem tive que optar por um registry publico então escolhi o meu próprio para colocar a imagem e facilitar a entrega , mas pode ser facilmente trocada por alguma outra. no inicio eu tentei fazer o copy da imagem local para dentro do kind , mas para executar com perfeição seria necessário levar mais tempo ( tive alguns problemas porque eu uso o Podman e seria melhor aplicado usando o docker ) por isso preferi usar o registry publico. apos isso eu subi o repo para meu github. Para rodar os comandos de test eu preferi usar o K6 uma ferramenta free para testes , que pode ser usado também para testes de carga e de funcionalidades.
