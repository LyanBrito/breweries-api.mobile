# 🍻 breweries.api-mobile

Aplicativo mobile desenvolvido em React Native que consome a API pública de cervejarias e exibe uma lista de breweries
ao redor do mundo, com sistema de favoritos e navegação entre telas.


## 🔩 Funcionalidades
- Listagem de cervejarias (breweries)
-  Paginação simples (Next / Prev)
- ️ Sistema de favoritos
-  Tela exclusiva de favoritos
-  Abertura de site oficial da cervejaria

## 🎲 API utilizada
O projeto consome a API pública:
https://www.openbrewerydb.org/
### Endpoint usado
```http request
GET https://api.openbrewerydb.org/v1/breweries
```
### Retorno da API
```json
{
  "id": "10-56-brewing-company-knox",
  "name": "10-56 Brewing Company",
  "brewery_type": "micro",
  "address_1": "400 Brown Cir",
  "city": "Knox",
  "state": "Indiana",
  "country": "United States",
  "website_url": "http://www.1056brewing.com"
}
```

## 📁 Estrutura do Projeto

O projeto está organizado seguindo as melhores práticas de desenvolvimento em React Native com Expo, separando
responsabilidades entre componentes visuais e telas de navegação.

```text
breweries-api.mobile/
├── assets/              # Recursos estáticos (imagens, ícones, fontes)
├── src/                 # Código-fonte da aplicação
│   ├── components/      # Componentes reutilizáveis (UI)
│   │   ├── Card.jsx          # Componente de cartão individual
│   │   └── CardsWrapper.jsx  # Container para agrupamento de cards
│   └── screens/         # Telas principais da aplicação
│       ├── FavoritesScreen.jsx # Tela de cervejarias favoritas
│       └── HomeScreen.jsx      # Tela principal de busca/listagem
├── App.jsx              # Componente raiz que gerencia navegação e contextos
├── app.json             # Configurações globais do Expo
├── index.js             # Ponto de entrada do registro da aplicação
├── package.json         # Manifesto do projeto e dependências
└── README.md            # Documentação do sistema
```
## 📦 Técnologias

| Tecnologia                                                                                                                                                                       | Descrição                                                      | Link                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------|
| [![Expo](https://img.shields.io/badge/expo-%23000020.svg?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)                                                      | Plataforma para desenvolvimento e execução do app React Native | https://expo.dev/              |
| [![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/)                          | Base do aplicativo mobile multiplataforma                      | https://reactnative.dev/       |
| [![React Navigation](https://img.shields.io/badge/react_navigation-%23007AFF.svg?style=for-the-badge&logo=react&logoColor=white)](https://reactnavigation.org/)                  | Gerenciamento de navegação entre telas (Stack Navigator)       | https://reactnavigation.org/   |
| [![Styled Components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/) | Estilização dos componentes com CSS-in-JS                      | https://styled-components.com/ |
| [![Axios](https://img.shields.io/badge/axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)                                             | Consumo de API REST                                            | https://axios-http.com/        |

# 🍀 Contribuição

Sinta-se livre para clonar o repositório para testar e subir mudanças!