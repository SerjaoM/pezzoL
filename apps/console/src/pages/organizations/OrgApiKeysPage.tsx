import { usePezzoApiKeys } from "~/graphql/hooks/queries";
import { PezzoApiKeyListItem } from "~/components/api-keys/PezzoApiKeyListItem";
import { ProviderApiKeysList } from "~/components/api-keys/ProviderApiKeysList";
import { Card } from "@pezzo/ui";

export const OrgApiKeysPage = () => {
  const { pezzoApiKeys } = usePezzoApiKeys();

  return (
    <>
      <div className="mb-6 border-b border-b-border">
        <div className="container flex h-24 items-center">
          <h1>API Keys</h1>
        </div>
      </div>

      <div className="container space-y-6">
        <Card className="mx-auto flex flex-col gap-y-6 p-10">
          <section>
            <h2>Pezzo API Keys</h2>
            <p className="mt-2 opacity-60">
             Abaixo você pode encontrar sua chave API. Esta chave de API é fornecida para
              o Cliente  ao executar prompts.
            </p>

            <div className="mt-4 max-w-[500px]">
              {pezzoApiKeys?.map((item, index) => (
                <PezzoApiKeyListItem key={item.id} value={item.id} />
              ))}
            </div>
          </section>
        </Card>

        <Card className="mx-auto flex flex-col gap-y-6 p-10">
          <section>
            <h2>Provedor de  API Keys</h2>
            <p className="mt-2 opacity-60">
             Para poder testar seus prompts no Console,
              você deve fornecer uma chave de API para cada provedor que deseja testar.
              Isso é opcional..
            </p>

            <div className="mt-4 max-w-[500px]">
              <ProviderApiKeysList />
            </div>
          </section>
        </Card>
      </div>
    </>
  );
};
