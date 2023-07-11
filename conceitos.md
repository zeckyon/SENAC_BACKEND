## Conceitos:

# API - Application Programming Interface / Interface de Programação de Aplicativos
    ```
    - Um conjunto de especificações que definem de que forma as aplicações irão se comunicar.
    - Regras e protocolos para que softwares interajam entre si.
    - Interface para que um sistema acesse outro sistema.
    - Como se fosse um garçom de um restaurante, que faz a comunicação entre o cliente e a cozinha.
    ```

# REST - Representation State Transfer ou Tranferência Representacional de Dados    
    ```
    - Restrição de arquitetura
    - Conjunto de regras e convenções que permite que 2 sistemas se cominiquem pela internet
    - A arquitetura REST separa o backend e o frontend
    ``` 
# RESTful
    ```
    - Utiliza métodos HTTP
    - Utilizar em nuvem
    - Capacidade de aplicar os princípios de REST.
    - É quando todas as regras do REST são seguidos para a criação de uma API.
    ```
# Maturidade de modelo RESTful 
     ```
    Nível 0 
        A API precisa utilizar o protocolo HTTP para a comunicação.
    Nível 1
        A API deve possuir mapeamento de recursos bem definidos. Representando substantivos que fazem a correta utilização das URIs para os recursos respectivos.
    Nível 2
        A API deve utilizar o protocolo HTTP de forma semântica com seus verbos com o uso GET, POST, PUSH, DELETE de acordo com a requisição.
    Nível 3
        A API deve mostrar o seu estado atual de relacionamento com os demais recursos da API.
     ```

# JSON - JavaScript Object Notation
     ```
    - Padrão de dados.
    - Estruturar dados em formato de texto.
    - Transferir informações entre o servidor e o cliente.
     ```

# Requisições HTTP
    O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso.
    -GET, PUSH, DELETE, PUT, PATCH

# Headers HTTP
    Campo para envio de informações adicionais (normalmente formatação ou autorização) que não tem relação com os dados em si: Authorization, Content Type, Accept.

# HTTP Codes
    - 100 - 199: Informativos
    - 200 - 299: Sucesso
    - 300 - 399: Redirecionamento
    - 400 - 499: Erros do cliente
    - 500 - 599: Erros de servidor

# Framework
    - Reúne vários projetos, provendo uma funcionalidade genérica

# ExpressJS
    - Framework para NodeJS
    - Fornece requisitos mínimos para servidores web.