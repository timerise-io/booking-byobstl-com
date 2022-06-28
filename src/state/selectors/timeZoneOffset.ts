import { selector } from "recoil";
import ct, { TimezoneName } from "countries-and-timezones";
import { timeZoneAtom } from "state/atoms/timeZone";

export const timeZoneOffsetSelector = selector({
  key: "timeZoneOffsetSelector",
  get: ({ get }) => {
    const timeZone = get(timeZoneAtom);
    return ct.getAllTimezones()[timeZone as TimezoneName].utcOffset ?? 0;
  },
});
