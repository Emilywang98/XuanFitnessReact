const timeline = [{
    title: "May 1940",
    contentTitle: "Dunkirk",
    contentText:"Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    contentDetailedText: "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
  },];
  
  <div style={{ width: "500px", height: "950px" }}>
  <chrono
    scrollable
    timeline={timeline}
    mode="VERTICAL"
  />
  </div>

export { timeline };
