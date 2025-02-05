import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

export default function Page() {
  const descriptions = [
    "O código não conseguiu localizar o arquivo de configuração necessário para o funcionamento correto da aplicação. Isso pode ocorrer devido a um erro no caminho do arquivo ou por ele não ter sido criado na inicialização.",
    "A conexão com o servidor falhou enquanto o script estava sendo executado. Esse erro pode ser causado por problemas de rede, servidor indisponível ou configurações incorretas no ambiente de execução.",
    "O tipo de dado fornecido não corresponde ao tipo esperado pela função ou operação. Isso pode ocorrer quando um número é fornecido onde se espera uma string ou outro tipo incompatível, resultando em erro de tipo.",
    "O tempo limite de resposta do servidor foi atingido. Isso acontece quando a solicitação ao servidor leva mais tempo do que o permitido, podendo ser causado por sobrecarga no servidor ou pela complexidade da consulta.",
    "O arquivo de log não pôde ser aberto para escrita devido a problemas de permissões ou falta de espaço no disco. Sem o arquivo de log, o sistema pode ter dificuldades em registrar eventos importantes para depuração.",
    "O servidor não conseguiu processar a requisição devido a um erro interno. Esse erro geralmente indica falha no código do servidor ou em algum componente do sistema, que impediu o processamento correto da solicitação.",
    "A dependência do módulo necessário para o funcionamento da aplicação não foi encontrada. Isso pode ocorrer quando uma biblioteca externa não está instalada ou configurada corretamente, resultando em falha ao tentar carregar o módulo.",
    "A variável de ambiente necessária para a execução da aplicação não foi definida corretamente. Isso pode causar falhas em funcionalidades dependentes de configurações externas, como URLs de APIs ou chaves de acesso.",
    "O formato do arquivo recebido não é válido para o tipo de processamento esperado. Isso pode acontecer se um arquivo corrompido ou em um formato inesperado for enviado, impedindo a aplicação de processá-lo corretamente.",
    "O recurso solicitado não foi encontrado no servidor. Esse erro ocorre quando a URL ou endpoint requisitado não corresponde a nenhum recurso disponível ou foi removido do servidor.",
    "A autenticação falhou devido a credenciais inválidas. Isso pode ocorrer quando o nome de usuário ou senha fornecidos não correspondem aos dados registrados, ou quando as credenciais são mal formadas.",
    "O acesso à API foi bloqueado por problemas de permissão. Isso pode acontecer devido a falhas nas configurações de CORS, erros de autorização ou quando o usuário não possui as permissões adequadas para acessar o recurso.",
    "O servidor não conseguiu identificar a requisição devido à falta de parâmetros obrigatórios. Isso indica que a requisição não forneceu todos os dados necessários para processar a solicitação, como IDs, tokens ou dados essenciais.",
    "A conexão foi fechada inesperadamente pelo servidor. Esse erro pode ser causado por uma falha na rede, problemas de configuração no servidor ou desconexão prematura durante a execução da requisição.",
    "A versão do pacote instalada não é compatível com o sistema. Esse erro ocorre quando a versão do software instalada não é suportada pelo sistema, resultando em incompatibilidade e falhas de funcionamento.",
    "O banco de dados retornou um erro durante a consulta. Isso pode acontecer por diversos motivos, como erro de sintaxe na consulta, problemas de conexão com o banco ou falta de dados no banco de dados.",
    "A chave de API fornecida não é válida. Isso pode ocorrer quando uma chave incorreta ou desativada é utilizada para autenticar a solicitação, impedindo o acesso aos recursos da API.",
    "O arquivo de configuração está faltando ou corrompido. Isso pode afetar a inicialização do sistema, impedindo que ele leia as configurações necessárias para o seu funcionamento, como credenciais, rotas ou variáveis de ambiente.",
    "A memória alocada para o processo foi insuficiente, resultando em falha ao tentar executar operações que exigem mais recursos do sistema, como manipulação de grandes volumes de dados ou execução de processos complexos.",
    "O método de autenticação não foi especificado corretamente, fazendo com que o sistema não consiga identificar qual protocolo de autenticação deve ser utilizado, como Basic Auth, OAuth ou JWT.",
    "A dependência de rede necessária para o funcionamento da aplicação não está disponível no momento. Isso pode ocorrer devido a problemas temporários de conectividade com servidores externos, APIs ou outras dependências da rede.",
    "O tempo de resposta do banco de dados excedeu o limite aceitável. Isso ocorre quando o banco de dados leva mais tempo para processar uma consulta do que o sistema considera tolerável, podendo ser causado por consultas complexas ou sobrecarga do banco.",
    "O sistema não conseguiu gravar os dados no banco de dados, possivelmente devido a erros de conexão, permissões insuficientes ou falha ao tentar inserir ou atualizar dados na base de dados.",
    "A URL fornecida não pode ser resolvida, indicando que o endereço fornecido não corresponde a nenhum recurso válido, possivelmente devido a erros no domínio ou configuração incorreta de DNS.",
    "O servidor excedeu o número máximo de conexões simultâneas. Esse erro ocorre quando o servidor não consegue lidar com mais requisições simultâneas devido a um número excessivo de usuários ou limitações no servidor.",
    "O token JWT fornecido expirou e não pode mais ser utilizado para autenticação. Tokens JWT possuem um tempo de validade, após o qual o sistema rejeitará a autenticação, pedindo para o usuário realizar o login novamente.",
    "A execução do código foi interrompida devido a um erro não tratado, o que pode indicar um problema inesperado durante o processamento de dados, resultando na parada completa da aplicação até que o erro seja resolvido.",
    "O arquivo enviado ultrapassa o limite de tamanho permitido. Isso ocorre quando o arquivo enviado ao servidor excede o valor máximo configurado, impedindo seu processamento e obrigando o usuário a reduzir o tamanho do arquivo.",
    "A requisição HTTP retornou um código de status 500, indicando um erro interno do servidor. Esse tipo de erro pode ser causado por falhas na lógica do servidor, problemas com a infraestrutura ou erros inesperados no sistema.",
    "O sistema não conseguiu ler os dados do arquivo, possivelmente devido a corrupção no arquivo, problemas de permissões ou falhas no processo de leitura, impedindo que as informações sejam processadas corretamente.",
    "Alter Trigger possivelmente devido a corrupção no arquivo, problemas de permissões ou falhas no processo de leitura, impedindo que as informações sejam processadas corretamente.",
  ];

  let counter = 1;
  const data: any = Array.from({ length: 10000 }, (_, index) => ({
    id: (counter++ % 100000).toString().padStart(6, "0"),
    title: `Erro de Script na versão ${14861 + index}`,
    description: descriptions[index % descriptions.length],
  }));

  return (
    <div className="mt-10">
      <div className="flex justify-between items-baseline">
        <div>
          <h3 className="text-2xl font-bold">Todas as Dicas:</h3>
        </div>
        <div>
          <Dialog>
            <DialogTrigger className="border p-2 rounded flex items-center gap-1 bg-blue-400 text-white hover:bg-blue-300">
              <PlusCircle className="h-5" />
              Cadastrar Nova Dica
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cadastrar Nova Dica</DialogTitle>
                <DialogDescription>Crie sua nova dica</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-10 p-2">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
