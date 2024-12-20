export function updateData(timeline, chartRef, selection) {
  selection.value = timeline;
  switch (timeline) {
    case "one_month":
      chartRef.value.zoomX(
        new Date("28 Jan 2013").getTime(),
        new Date("27 Feb 2013").getTime()
      );
      break;
    case "six_months":
      chartRef.value.zoomX(
        new Date("27 Sep 2012").getTime(),
        new Date("27 Feb 2013").getTime()
      );
      break;
    case "one_year":
      chartRef.value.zoomX(
        new Date("27 Feb 2012").getTime(),
        new Date("27 Feb 2013").getTime()
      );
      break;
    case "ytd":
      chartRef.value.zoomX(
        new Date("01 Jan 2013").getTime(),
        new Date("27 Feb 2013").getTime()
      );
      break;
    case "all":
      chartRef.value.zoomX(
        new Date("23 Jan 2012").getTime(),
        new Date("27 Feb 2013").getTime()
      );
      break;
    default:
      break;
  }
}
