# CocoBambu Test Automation

Este é um projeto de automação de testes utilizando Cucumber, JUnit, Selenium e o plugin Cluecumber para geração de relatórios.

## Vídeo de Execução

Assista ao vídeo de execução do projeto [aqui](https://veed.io/view/7447a6bf-b712-485f-b09e-0de3f0ac181b).

## Como Rodar os Testes pelo Terminal

Para executar os testes pelo terminal, você pode usar o Maven. Certifique-se de que o Maven esteja instalado em sua máquina. Em seguida, execute o seguinte comando:

mvn test -Dtest=RunCucumber -Dbrowser=chrome


Isso executará os testes de automação no navegador Chrome. Você pode substituir `chrome` pelo navegador de sua escolha.

## Como Gerar Relatórios pelo Terminal

Para gerar relatórios a partir dos resultados dos testes, você pode usar o plugin Cluecumber. Execute o seguinte comando:

mvn cluecumber-report:reporting


Os relatórios gerados estarão disponíveis na pasta `target/formated-report`.

Este projeto utiliza o Maven para gerenciamento de dependências e construção. Certifique-se de que o Maven esteja configurado corretamente em seu ambiente.

## Dependências

As dependências do projeto estão definidas no arquivo `pom.xml`. Para manter a lista de dependências atualizada, verifique o arquivo `pom.xml`.

## Contato

Você pode me encontrar no LinkedIn: [Thiago Lyon](https://www.linkedin.com/in/thiagolyon/).

Também estou no GitHub: [GitHub - Thiago Lyon](https://github.com/thiagolyon).
