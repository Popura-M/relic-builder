import { subStats } from "@/utils/dataStat";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

export default function SubStat({ index, sub, mainStat, setSubStat, increaseSubStep, decreaseSubStep, setRoll, upgrade }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-6">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className={`justify-between w-40`}>
            {sub[index].stat ? subStats.find((item) => item.name === sub[index].stat)?.name : `Select sub stat...`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <Command>
            <CommandInput placeholder={`Search stat...`} />
            <CommandEmpty>No character found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {subStats.map((item) => (
                  <CommandItem
                    disabled={sub.some((val) => val.stat === item.name || item.name === mainStat) || mainStat == ""}
                    key={item.id}
                    onSelect={(currentValue) => {
                      setSubStat(index, currentValue === sub[index].stat ? sub[index].stat : currentValue);
                      setOpen(false);
                    }}
                    value={item.name}
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-md">{item.name}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="text-center self-center">
        {sub[index].stat !== "" ? (
          <p>
            {(subStats.find((stat) => stat.name === sub[index].stat)?.base * sub[index].step).toFixed(1)}
            {sub[index].stat === "HP" || sub[index].stat === "ATK" || sub[index].stat === "DEF" || sub[index].stat === "Speed" ? "" : "%"}
          </p>
        ) : null}
      </div>
      <div className="flex items-center gap-3 col-span-2">
        <Button disabled={upgrade === 0 || sub[index].step === 1} onClick={() => decreaseSubStep(index)}>
          -
        </Button>
        <p>{sub[index].step - 1}</p>
        <Button disabled={upgrade === 5 || sub[index].step === 6 || sub[index].stat === ""} onClick={() => increaseSubStep(index)}>
          +
        </Button>
        <p>upgrade</p>
      </div>
      <div className="flex items-center gap-3">
        <p>Roll: </p>
        <Select disabled defaultValue={1} onValueChange={(val) => setRoll(index, val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Mid" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={0}>Low</SelectItem>
            <SelectItem value={1}>Mid</SelectItem>
            <SelectItem value={2}>High</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
