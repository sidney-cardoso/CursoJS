# NODE PACKAGE MANAGER

```
  2.      1.        0
Major   Minor     Patch
```

^ - atualiza a Minor e/ou Patch

~ - Atualiza somente a versão Patch

```bash
# iniciar o node
npm init -y

# Adicionar um pacote
npm install <package-name>

# "package": "^1.0.0" - O circunflexo indica que a versão do pacote poderá ser atualizada

# Adicionar um pacote e fazer com que a versão instalada não atualize
npm install <package-name> -E

# Atualizar pacotes:
npm update

# Instalando um pacote como dependência de desenvolvimento
npm install <package-name> --save-dev


# Instalando um pacote como dependência
npm install <package-name> --save-prod

# Adicionando uma versão especifica de um pacote

npm install <package-name>@1.0.0

# Listar os pacotes instalados
npm ls

# Ver os pacotes que estão desatualizados
npm outdated

# Remover pacotes
npm remove <package-name>

```
