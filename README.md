# 🚀 n8n Workflows & Automations

![n8n](https://img.shields.io/badge/n8n-Workflow_Automation-orange?style=flat-square&logo=n8n)
![Node.js](https://img.shields.io/badge/Node.js-Backend_Logic-green?style=flat-square&logo=node.js)
![AWS](https://img.shields.io/badge/AWS-Lambda_Integrations-232F3E?style=flat-square&logo=amazon-aws)

Este repositório serve como um hub central para meus fluxos de trabalho
(workflows) do **n8n**. Aqui documento e versiono automações complexas
que integram serviços de mensageria (WhatsApp/Waha), Cloud Computing
(AWS), ERPs e lógica customizada via JavaScript.

## 🛠️ Stack Tecnológica

As automações contidas aqui utilizam principalmente:

-   **n8n:** Orquestração e lógica visual.
-   **JavaScript / Node.js:** Manipulação avançada de dados e scripts
    customizados.
-   **Waha (WhatsApp HTTP API):** Envio e recebimento de mensagens e
    mídias.
-   **AWS (Lambda / S3):** Microsserviços serverless.
-   **APIs REST / Webhooks:** Comunicação entre sistemas.

## 📂 Estrutura do Repositório

``` text
.
├── workflows/
│   ├── aws-integrations/
│   ├── whatsapp-waha/
│   ├── data-processing/
│   └── utilitarios/
├── scripts/
├── .env.example
└── README.md
```

## ⚙️ Configuração e Segurança

⚠️ **Importante:** Nenhuma credencial sensível é versionada.

### Variáveis de Ambiente

Utilize o arquivo `.env.example` como base:

``` bash
cp .env.example .env
```

Preencha o `.env` com suas credenciais locais.

### Importando no n8n

1.  Copie o conteúdo do arquivo `.json` do workflow desejado.
2.  Cole diretamente no canvas do n8n (`Ctrl + V`).
3.  Configure as credenciais no painel do n8n.

## 🤝 Autor

Desenvolvido por **Kleyson Gomes**\
Full Stack Developer focado em automação e eficiência.

Projeto pessoal para portfólio e versionamento de automações.
