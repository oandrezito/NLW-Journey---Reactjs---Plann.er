import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportatLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className=" space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 ">
            <span className="block font-medium text-zinc-100">
              {" "}
              Resetva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://google.codddddddddddddddddddddddddddddddddddddddddddddddddddddm
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 ">
            <span className="block font-medium text-zinc-100">
              {" "}
              Resetva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://google.codddddddddddddddddddddddddddddddddddddddddddddddddddddm
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
        Cadastrar novo link
      </button>

      <Button variant="secondary" size="full">
        Gerenciar convidados
        <Plus className="size-5 " />
      </Button>
    </div>
  );
}
