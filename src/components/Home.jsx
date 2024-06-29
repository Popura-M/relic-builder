import { useCharStore } from "@/stores/character-store";
import { useLightconeStore } from "@/stores/lightcone-store";
import Character from "./fragments/Character";
import CreateRelic from "./fragments/CreateRelic";
import Lightcone from "./fragments/Lightcone";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useShallow } from "zustand/react/shallow";
import RelicCoder from "./fragments/RelicCoder";

export default function Home() {
  const [idChar, nameChar, rankChar, energy] = useCharStore(
    useShallow((state) => [state.id, state.name, state.rank, state.energy])
  );
  const [idLc, levelLc, rankLc, promotionLc] = useLightconeStore(
    useShallow((state) => [state.id, state.level, state.rank, state.promotion])
  );

  return (
    <>
      <h1 className="text-3xl py-3">Relic Builder for Config File v2</h1>
      <div className="max-w-full min-w-full border-2 rounded-md p-3 overflow-auto">
        <div className="pb-5">
          <div className="grid grid-cols-2 divide-x-2">
            <Character />
            <Lightcone />
          </div>
        </div>
        <div className="border-t pt-5">
          <CreateRelic />
        </div>
      </div>
      <div>
        <Dialog>
          <div className="max-w-full flex flex-col gap-2 w-fit mx-auto mt-5 bg-slate-300 dark:bg-slate-800 px-20 py-1">
            {
              <>
                <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">
                  <span style={{ userSelect: "none", fontSize: "1.5rem", marginLeft: "-5rem" }}>Avatar Config Block<br /></span>
                  <span style={{ userSelect: "none", fontSize: "1.5rem" }}>{`{`}<br /></span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "name": "{nameChar}",<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "id": {idChar},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "hp": 100,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "sp": {energy},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "level": 80,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "promotion": 6,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "rank": {rankChar},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             "lightcone": {`{`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "id": {idLc},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "rank": {rankLc},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "level": {levelLc},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "promotion": {promotionLc},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              {`}`},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              "relics": {`[`}<br />
                  <RelicCoder />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              {`]`},<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              "use_technique": true<br />
                  <span style={{ userSelect: "none", fontSize: "1.5rem" }}>{`}`}<br /></span>
                  
                </div>
              </>
            }
          </div>
        </Dialog>
      </div>
    </>
  );
}
