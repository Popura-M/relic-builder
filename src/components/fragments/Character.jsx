import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { getData } from "@/services/hakush";
import { useCharStore } from "@/stores/character-store";
import { useShallow } from "zustand/react/shallow";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function Character() {
  const [listId, setListId] = useState([]);
  const [characterData, setCharacterData] = useState({});
  const [search, setSearch] = useState("");
  const [filterBaseType, setFilterBaseType] = useState([]);
  const [filterDamageType, setFilterDamageType] = useState([]);
  const [filterRankType, setFilterRankType] = useState([]);
  const [id, setId, name, setName, level, setLevel, rank, setRank, promotion, setPromotion, trace, setTrace, energy, setEnergy] = useCharStore(
    useShallow((state) => [state.id, state.setId, state.name, state.setName, state.level, state.setLevel, state.rank, state.setRank, state.promotion, state.setPromotion, state.trace, state.setTrace, state.energy, state.setEnergy])
  );

  useEffect(() => {
    getData("character", (data) => {
      setListId(Object.keys(data));
      setCharacterData(data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleBaseChange = (baseType) => {
    setFilterBaseType(prevFilters => prevFilters.includes(baseType) ? [] : [baseType]);
  };

  const handleDamageChange = (damageType) => {
    setFilterDamageType((prevFilters) => prevFilters.includes(damageType) ? [] : [damageType]);
  };

  const handleRankChange = (rankType) => {
    setFilterRankType((prevFilters) => prevFilters.includes(rankType) ? [] : [rankType]);
  };

  const filteredId = listId.filter((id) => {
    const character = characterData[id];
    const matchesSearch = character?.en?.toLowerCase().includes(search);
    const matchesBaseType = filterBaseType.length > 0 ? filterBaseType.includes(character?.baseType) : true;
    const matchesDamageType = filterDamageType.length > 0 ? filterDamageType.includes(character?.damageType) : true;
    const matchesRankType = filterRankType.length > 0 ? filterRankType.includes(character?.rank) : true;
    return matchesSearch && matchesBaseType && matchesDamageType && matchesRankType;
  });

  return (
    <div className="flex flex-col px-3">
      <span className="text-2xl font-bold mb-1">Character</span>
      <Dialog>
        <DialogTrigger className="bg-black text-white dark:bg-white dark:text-black rounded-md px-5 py-2 font-semibold">Select character</DialogTrigger>
        <DialogContent className="max-h-[800px] min-h-[800px] scroll-auto max-w-7xl overflow-auto">
          <DialogHeader className={"shrink"}>
            <DialogTitle>Character</DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap gap-5">
            <div className="w-full">
              <Input type="text" placeholder="Search..." onChange={handleSearch} />
              <div className="flex gap-1 mt-2">
                <Path path={"Knight"} filter={handleBaseChange} base={filterBaseType} />
                <Path path={"Mage"} filter={handleBaseChange} base={filterBaseType} />
                <Path path={"Priest"} filter={handleBaseChange} base={filterBaseType} />
                <Path path={"Rogue"} filter={handleBaseChange} base={filterBaseType} />
                <Path path={"Shaman"} filter={handleBaseChange} base={filterBaseType} />
                <Path path={"Warlock"} filter={handleBaseChange} base={filterBaseType} />
                <Path path={"Warrior"} filter={handleBaseChange} base={filterBaseType} />
                <Element ele={"Fire"} filter={handleDamageChange} damage={filterDamageType} />
                <Element ele={"Ice"} filter={handleDamageChange} damage={filterDamageType} />
                <Element ele={"Imaginary"} filter={handleDamageChange} damage={filterDamageType} />
                <Element ele={"Physical"} filter={handleDamageChange} damage={filterDamageType} />
                <Element ele={"Quantum"} filter={handleDamageChange} damage={filterDamageType} />
                <Element ele={"Thunder"} filter={handleDamageChange} damage={filterDamageType} />
                <Element ele={"Wind"} filter={handleDamageChange} damage={filterDamageType} />
                <div
                  className={`filter text-white text-2xl font-semibold flex items-center justify-center ${filterRankType.includes("CombatPowerAvatarRarityType5") ? "bg-black/75 dark:bg-white/15 border border-black dark:border-white" : "border"
                    }`}
                  onClick={() => handleRankChange("CombatPowerAvatarRarityType5")}
                >
                  5*
                </div>
                <div
                  className={`filter text-white text-2xl font-semibold flex items-center justify-center ${filterRankType.includes("CombatPowerAvatarRarityType4") ? "bg-black/75 dark:bg-white/15 border border-black dark:border-white" : "border"
                    }`}
                  onClick={() => handleRankChange("CombatPowerAvatarRarityType4")}
                >
                  4*
                </div>
              </div>
            </div>

            {Object.entries(characterData)
              .filter(([key, value]) => filteredId.includes(key))
              .sort((a, b) => {
                const releaseA = a[1].release || 2000000000;
                const releaseB = b[1].release || 2000000000;
                return releaseB - releaseA;
              })
              .map(([key, character]) => (
                <DialogClose asChild key={key}>
                  <div
                    className={`w-[150px] border hover:border-black dark:hover:border-white rounded-lg py-1 px-2 cursor-pointer ${character.rank === "CombatPowerAvatarRarityType5" ? "five-star" : "four-star"}`}
                    onClick={() => {
                      setId(key);
                      setName(character.en == "{NICKNAME}" ? `Trailblazer` : character.en)
                    }
                    }
                  >
                    <img src={`https://api.hakush.in/hsr/UI/avatarshopicon/${key}.webp`} alt={character.en} />
                    <p className="font-semibold text-white">
                      {character.en == "{NICKNAME}"
                        ? `Trailblazer ${character.icon.includes("girl") ? "Female" : "Male"} (${character.damageType})`
                        : character.en}
                    </p>
                  </div>
                </DialogClose>
              ))}
          </div>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-2">
        <img className="w-[300px]" src={`https://api.hakush.in/hsr/UI/avatarshopicon/${id}.webp`} alt={id} />
        {id && (
          <div className="flex flex-col gap-5">
            <div>
              <b>{name}</b><br />
              <span>Level: {level}</span>
              <Slider className="cursor-not-allowed mt-1" defaultValue={[80]} max={80} min={1} step={1} onValueChange={(val) => setLevel([val < 10 ? 1 : Math.floor(val / 10) * 10])} disabled />
            </div>
            <div>
              <span>Eidolon: {rank}</span>
              <Slider className="cursor-pointer mt-1" defaultValue={[0]} max={6} min={0} step={1} onValueChange={(val) => setRank(val)} />
            </div>
            <div>
              <span>Ascension: {promotion}</span>
              <Slider className="cursor-not-allowed mt-1" defaultValue={[6]} max={6} min={1} step={1} onValueChange={(val) => setPromotion(val)} disabled />
            </div>
            {/* <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">
              /set avatar eidolon {id} {rank}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="trace" onCheckedChange={(val) => setTrace(val)} defaultChecked={true} />
              <label htmlFor="trace" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Max trace
              </label>
            </div>
            {trace && <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">/set avatar max_trace {id}</div>} */}
            <div>
              <span>Energy: {Math.floor(energy / 1)}%</span>
              <Slider className="cursor-pointer mt-1" defaultValue={[50]} max={100} min={0} step={5} onValueChange={(val) => setEnergy(val)} />
            </div>
            <div className="bg-slate-300 dark:bg-slate-800 px-3 py-1">
              "name": "{name}", <br />
              "id": {id},<br />
              "hp": 100,<br />
              "sp": {energy},<br />
              "level": {level},<br />
              "promotion": {promotion},<br />
              "rank": {rank},
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Path({ path, filter, base }) {
  return (
    <div className={`filter ${base.includes(path) ? "bg-black/75 dark:bg-white/15 border border-black dark:border-white" : "border"}`} onClick={() => filter(path)}>
      <img src={`https://api.hakush.in/hsr/UI/pathicon/${path.toLowerCase()}.webp`} alt={path} />
    </div>
  );
}

function Element({ ele, filter, damage }) {
  return (
    <div className={`filter ${damage.includes(ele) ? "bg-black/75 dark:bg-white/15 border border-black dark:border-white" : "border"}`} onClick={() => filter(ele)}>
      <img className="w-full" src={`https://api.hakush.in/hsr/UI/element/${ele.toLowerCase()}.webp`} alt={ele} />
    </div>
  );
}
