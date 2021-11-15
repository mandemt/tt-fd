
  const margin = {top: 40, bottom: 10, left: 120, right: 20};
  const width = 800 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  // Creates sources <svg> element
  const svg = d3.select('body').append('svg')
              .attr('width', width+margin.left+margin.right)
              .attr('height', height+margin.top+margin.bottom);

  // Group used to enforce margin
  const g = svg.append('g')
              .attr('transform', `translate(${margin.left},${margin.top})`);

  // Global variable for all data
sampleArray = data
countedData = []
sampleArray.forEach((a, index) => {
    let gebruik = sampleArray.zin
    countedData.push(gebruik)
});
// console.log(countedData)


const dataset = [{}];
countedData.forEach((x) => {
  dataset[x] = (dataset[x] || 0) + 1;
});
console.log(dataset)
bar_height = 100

  /////////////////////////
  // TODO create a nested title element that shows the value as tooltip

  // Render the chart with new data

  // DATA JOIN
  const rect = g.selectAll('rect').data(dataset).join(
    // ENTER 
    // new elements
    (enter) => enter.append('rect').attr('x', 0),
    // UPDATE
    // update existing elements
    (update) => update,
    // EXIT
    // elements that aren't associated with data
    (exit) => exit.remove()
    );

  // ENTER + UPDATE
  // both old and new elements
  rect
    .attr('height', bar_height)
    .attr('width', (d) => d[10] * 7)
    .attr('y', (d, i) => i*(bar_height+5));