import { useHandStore, useHeadStore, useBodyStore, useFeetStore, usePlanarStore, useRopeStore } from "../../stores/relic-store";
import { useShallow } from "zustand/react/shallow";
import RelicPiece from "./RelicPiece";
import SubStat from "./SubStat";
import PlanarPiece from "./PlanarPiece";
import { Button } from "../ui/button";
import { mainStatHead, mainStatHand, mainStatBody, mainStatFeet, mainStatPlanar, mainStatLink } from "@/utils/dataStat";
import RelicCoder from "./RelicCoder";

export default function CreateRelic() {
  const [relicHead, setRelicHead, mainStatHeadd, setMainStatHead, sub, setSubStat, increaseSubStep, decreaseSubStep, setRoll, upgrade, resetHead, randomSubHead, randomStepHead] = useHeadStore(
    useShallow((state) => [
      state.relicHead,
      state.setRelicHead,
      state.mainStatHead = "HP",
      state.setMainStatHead,
      state.sub,
      state.setSubStat,
      state.increaseSubStep,
      state.decreaseSubStep,
      state.setRoll,
      state.upgrade,
      state.resetHead,
      state.randomSubHead,
      state.randomStep,
    ])
  );

  const [relicHand, setRelicHand, mainStatHandd, setMainStatHand, subHand, setSubStatHand, increaseSubStepHand, decreaseSubStepHand, setRollHand, upgradeHand, resetHand, randomSubHand, randomStepHand] = useHandStore(
    useShallow((state) => [
      state.relicHand,
      state.setRelicHand,
      state.mainStatHand = "ATK",
      state.setMainStatHand,
      state.subHand,
      state.setSubStatHand,
      state.increaseSubStepHand,
      state.decreaseSubStepHand,
      state.setRollHand,
      state.upgradeHand,
      state.resetHand,
      state.randomSubHand,
      state.randomStep,
    ])
  );
  const [relicBody, setRelicBody, mainStatBodyy, setMainStatBody, subBody, setSubStatBody, increaseSubStepBody, decreaseSubStepBody, setRollBody, upgradeBody, resetBody, randomSubBody, randomStepBody] = useBodyStore(
    useShallow((state) => [
      state.relicBody,
      state.setRelicBody,
      state.mainStatBody,
      state.setMainStatBody,
      state.subBody,
      state.setSubStatBody,
      state.increaseSubStepBody,
      state.decreaseSubStepBody,
      state.setRollBody,
      state.upgradeBody,
      state.resetBody,
      state.randomSubBody,
      state.randomStep,
    ])
  );
  const [relicFeet, setRelicFeet, mainStatFeett, setMainStatFeet, subFeet, setSubStatFeet, increaseSubStepFeet, decreaseSubStepFeet, setRollFeet, upgradeFeet, resetFeet, randomSubFeet, randomStepFeet] = useFeetStore(
    useShallow((state) => [
      state.relicFeet,
      state.setRelicFeet,
      state.mainStatFeet,
      state.setMainStatFeet,
      state.subFeet,
      state.setSubStatFeet,
      state.increaseSubStepFeet,
      state.decreaseSubStepFeet,
      state.setRollFeet,
      state.upgradeFeet,
      state.resetFeet,
      state.randomSubFeet,
      state.randomStep,
    ])
  );
  const [relicPlanar, setRelicPlanar, mainStatPlanarr, setMainStatPlanar, subPlanar, setSubStatPlanar, increaseSubStepPlanar, decreaseSubStepPlanar, setRollPlanar, upgradePlanar, resetPlanar, randomSubPlanar, randomStepPlanar] =
    usePlanarStore(
      useShallow((state) => [
        state.relicPlanar,
        state.setRelicPlanar,
        state.mainStatPlanar,
        state.setMainStatPlanar,
        state.subPlanar,
        state.setSubStatPlanar,
        state.increaseSubStepPlanar,
        state.decreaseSubStepPlanar,
        state.setRollPlanar,
        state.upgradePlanar,
        state.resetPlanar,
        state.randomSubPlanar,
        state.randomStep,
      ])
    );
  const [relicRope, setRelicRope, mainStatRopee, setMainStatRope, subRope, setSubStatRope, increaseSubStepRope, decreaseSubStepRope, setRollRope, upgradeRope, resetRope, randomSubRope, randomStepRope] = useRopeStore(
    useShallow((state) => [
      state.relicRope,
      state.setRelicRope,
      state.mainStatRope,
      state.setMainStatRope,
      state.subRope,
      state.setSubStatRope,
      state.increaseSubStepRope,
      state.decreaseSubStepRope,
      state.setRollRope,
      state.upgradeRope,
      state.resetRope,
      state.randomSubRope,
      state.randomStep,
    ])
  );

  return (
    <div>
      <div className="flex gap-3">
        <span className="text-2xl font-bold">Relic</span>
        <Button
          onClick={() => {
            resetHead();
            resetHand();
            resetBody();
            resetFeet();
            resetRope();
            resetPlanar();
          }}
          variant="destructive"
        >
          Reset All
        </Button>
      </div>
      <div>
        <RelicPiece
          reset={resetHead}
          name={"Head"}
          relicMain={mainStatHead}
          upgradePc={upgrade}
          relicPc={relicHead}
          setRelic={setRelicHead}
          mainStat={mainStatHeadd}
          setMainStat={setMainStatHead}
          random={randomSubHead}
          randomStep={randomStepHead}
          setAll={() => {
            setRelicHand(relicHead)
            setRelicBody(relicHead)
            setRelicFeet(relicHead)
          }}
        >
          <SubStat index={0} sub={sub} mainStat={mainStatHeadd} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
          <SubStat index={1} sub={sub} mainStat={mainStatHeadd} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
          <SubStat index={2} sub={sub} mainStat={mainStatHeadd} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
          <SubStat index={3} sub={sub} mainStat={mainStatHeadd} setSubStat={setSubStat} increaseSubStep={increaseSubStep} decreaseSubStep={decreaseSubStep} setRoll={setRoll} upgrade={upgrade} />
        </RelicPiece>
        <RelicPiece
          reset={resetHand}
          name={"Hand"}
          relicMain={mainStatHand}
          upgradePc={upgradeHand}
          relicPc={relicHand}
          setRelic={setRelicHand}
          mainStat={mainStatHandd}
          setMainStat={setMainStatHand}
          random={randomSubHand}
          randomStep={randomStepHand}
        >
          <SubStat index={0} sub={subHand} mainStat={mainStatHandd} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
          <SubStat index={1} sub={subHand} mainStat={mainStatHandd} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
          <SubStat index={2} sub={subHand} mainStat={mainStatHandd} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
          <SubStat index={3} sub={subHand} mainStat={mainStatHandd} setSubStat={setSubStatHand} increaseSubStep={increaseSubStepHand} decreaseSubStep={decreaseSubStepHand} setRoll={setRollHand} upgrade={upgradeHand} />
        </RelicPiece>
        <RelicPiece
          reset={resetBody}
          name={"Body"}
          relicMain={mainStatBody}
          upgradePc={upgradeBody}
          relicPc={relicBody}
          setRelic={setRelicBody}
          mainStat={mainStatBodyy}
          setMainStat={setMainStatBody}
          random={randomSubBody}
          randomStep={randomStepBody}
        >
          <SubStat index={0} sub={subBody} mainStat={mainStatBodyy} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
          <SubStat index={1} sub={subBody} mainStat={mainStatBodyy} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
          <SubStat index={2} sub={subBody} mainStat={mainStatBodyy} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
          <SubStat index={3} sub={subBody} mainStat={mainStatBodyy} setSubStat={setSubStatBody} increaseSubStep={increaseSubStepBody} decreaseSubStep={decreaseSubStepBody} setRoll={setRollBody} upgrade={upgradeBody} />
        </RelicPiece>
        <RelicPiece
          reset={resetFeet}
          name={"Feet"}
          relicMain={mainStatFeet}
          upgradePc={upgradeFeet}
          relicPc={relicFeet}
          setRelic={setRelicFeet}
          mainStat={mainStatFeett}
          setMainStat={setMainStatFeet}
          random={randomSubFeet}
          randomStep={randomStepFeet}
        >
          <SubStat index={0} sub={subFeet} mainStat={mainStatFeett} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
          <SubStat index={1} sub={subFeet} mainStat={mainStatFeett} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
          <SubStat index={2} sub={subFeet} mainStat={mainStatFeett} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
          <SubStat index={3} sub={subFeet} mainStat={mainStatFeett} setSubStat={setSubStatFeet} increaseSubStep={increaseSubStepFeet} decreaseSubStep={decreaseSubStepFeet} setRoll={setRollFeet} upgrade={upgradeFeet} />
        </RelicPiece>
        <PlanarPiece
          reset={resetPlanar}
          name={"Planar"}
          relicMain={mainStatPlanar}
          upgradePc={upgradePlanar}
          relicPc={relicPlanar}
          setRelic={setRelicPlanar}
          mainStat={mainStatPlanarr}
          setMainStat={setMainStatPlanar}
          random={randomSubPlanar}
          randomStep={randomStepPlanar}
          setAll={() => {
            setRelicRope(relicPlanar)
          }}
        >
          <SubStat index={0} sub={subPlanar} mainStat={mainStatPlanarr} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
          <SubStat index={1} sub={subPlanar} mainStat={mainStatPlanarr} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
          <SubStat index={2} sub={subPlanar} mainStat={mainStatPlanarr} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
          <SubStat index={3} sub={subPlanar} mainStat={mainStatPlanarr} setSubStat={setSubStatPlanar} increaseSubStep={increaseSubStepPlanar} decreaseSubStep={decreaseSubStepPlanar} setRoll={setRollPlanar} upgrade={upgradePlanar} />
        </PlanarPiece>
        <PlanarPiece
          reset={resetRope}
          name={"Rope"}
          relicMain={mainStatLink}
          upgradePc={upgradeRope}
          relicPc={relicRope}
          setRelic={setRelicRope}
          mainStat={mainStatRopee}
          setMainStat={setMainStatRope}
          random={randomSubRope}
          randomStep={randomStepRope}
        >
          <SubStat index={0} sub={subRope} mainStat={mainStatRopee} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
          <SubStat index={1} sub={subRope} mainStat={mainStatRopee} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
          <SubStat index={2} sub={subRope} mainStat={mainStatRopee} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
          <SubStat index={3} sub={subRope} mainStat={mainStatRopee} setSubStat={setSubStatRope} increaseSubStep={increaseSubStepRope} decreaseSubStep={decreaseSubStepRope} setRoll={setRollRope} upgrade={upgradeRope} />
        </PlanarPiece>
      </div>
    </div>
  );
}
