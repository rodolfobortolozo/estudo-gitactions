# 📦 Angular + Spring Boot no Mesmo JAR

Este aplicativo é uma implementação simples de um `CRUD TODO`, com o intuito de estudar o acoplamento entre as tecnologias **Angular** e **Spring Boot**. A decisão de embutir um projeto Angular dentro de um JAR do Spring Boot deve considerar não apenas a simplicidade do deploy, mas também o impacto na arquitetura da aplicação. Unir frontend e backend em um único artefato pode facilitar a implantação e reduzir a necessidade de infraestrutura adicional, garantindo que ambas as camadas sejam distribuídas juntas e eliminando problemas de versionamento entre serviços.

## Vantagens

- **Simplicidade no Deploy**: Frontend e backend são distribuídos juntos, simplificando o processo de implantação.
- **Redução de Infraestrutura**: Não é necessário configurar servidores separados para frontend e backend, o que pode reduzir a complexidade da infraestrutura.
- **Versionamento Unificado**: Como ambos os componentes estão no mesmo artefato, não há problemas de versionamento entre o frontend e o backend.

## Desvantagens

- **Build Mais Demorado**: O processo de build torna-se mais demorado devido ao aumento do tamanho do artefato.
- **Tamanho do JAR Aumentado**: O JAR gerado inclui tanto o backend quanto o frontend, o que pode aumentar significativamente o tamanho do arquivo.
- **Escalabilidade Comprometida**: Frontend e backend não podem ser escalados separadamente, limitando a flexibilidade em termos de performance.
- **Desempenho de Arquivos Estáticos**: O Spring Boot não é otimizado para servir arquivos estáticos, o que pode impactar o desempenho e limitar estratégias avançadas de cache e distribuição de conteúdo.

Para arquiteturas mais robustas e escaláveis, recomenda-se separar as camadas, mantendo o backend em Spring Boot e o frontend hospedado em um servidor especializado, como Nginx ou uma CDN. Essa separação melhora a performance, permite um melhor gerenciamento de cache e possibilita a escalabilidade independente das camadas, garantindo uma experiência mais eficiente para o usuário final.

## Profile
Para flexibilizar o processo de build, foi criado um profile Maven específico, `-Pbuild-angular`, `clean package -Pbuild-angular`, que permite gerar o JAR tanto com o frontend embutido quanto sem ele. Caso o profile não seja utilizado, o build gerará apenas o backend, sem o acoplamento do frontend. Dessa forma, é possível otimizar o tempo de build e adaptar a estratégia de implantação conforme necessário.
## 🛠 Tecnologias Utilizadas

| Tecnologia            | Descrição                             |
|-----------------------|---------------------------------------|
| **Spring Boot 3.4.2** | Backend da aplicação                  |
| **Java 21**           | Versão utilizada para desenvolvimento |
| **Angular 18**        | Framework frontend                    |
| **H2**                | Banco de Dados                        |