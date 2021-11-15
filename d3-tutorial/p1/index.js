const margin = { top: 50, bottom: 50, left: 120, right: 120 };
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
let count = []
data.forEach((nieuw, index) => {
    const variable = data[index].zin
    count.push(variable)
})
const counts = []
count.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;

});

console.log(counts)
const bar_height = 50;
console.table(counts)
const nieuw = [{
    "getal": 1, "keer": 1
},
{
    "getal": 3, "keer": 1
},
{
    "getal": 5, "keer": 1
},
{
    "getal": 6, "keer": 3
},
{
    "getal": 7, "keer": 13
}, 
{ "getal": 8, "keer": 11 
},
{ "getal" : 9, "keer": 1},
{"getal" : 10, "keer" :3 }]

console.table(nieuw[5].getal)

const xscale = d3.scaleLinear().range([0, width]);
const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1);

const xaxis = d3.axisTop().scale(xscale);
const g_xaxis = g.append('g').attr('class','x axis');
const yaxis = d3.axisLeft().scale(yscale);
const g_yaxis = g.append('g').attr('class','y axis');
update(nieuw);

function update(new_data) {

    xscale.domain([0, d3.max(new_data, (d) => d.keer)]);
    yscale.domain(new_data.map((d) => d.getal));
    //render the axis
    g_xaxis.transition().call(xaxis);
    g_yaxis.transition().call(yaxis);

    const rect = g.selectAll('rect').data(new_data).join(

        (enter) => {

            const rect_enter = enter.append('rect').attr('x', 0);

            rect_enter.append('title');

            return rect_enter;

        },
        (update) => update,
        (exit) =>
            exit.remove()

    );
    rect.transition()
    .attr('height', yscale.bandwidth())
    .attr('width', (d) => xscale(d.keer))
    .attr('y', (d) => yscale(d.getal));

  rect.select('title').text((d) => d.getal);
}

d3.select('#filter-us-only').on('change', function() {
    // This will be triggered when the user selects or unselects the checkbox
    const checked = d3.select(this).property('checked');
    if (checked === true) {
      // Checkbox was just checked
  
      // Keep only data element whose country is US
      const filtered_data = nieuw.filter((d) => d.keer <= '8');
  
      update(filtered_data);  // Update the chart with the filtered data
    } else {
      // Checkbox was just unchecked
      update(nieuw);  // Update the chart with all the data we have
    }
  });