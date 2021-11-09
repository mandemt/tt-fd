const margin = {
    top: 100,
    bottom: 0,
    left: 100,
    right: 100
}

const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const plaatje = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

const group = plaatje.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

let data;

const xscale = d3.scaleLinear().range([0, 500]);
const yscale = d3.scaleBand().range([0, height]).paddingInner(0.1);

const xaxis = d3.axisTop().scale(xscale)
const g_xaxis = group.append('g').attr('class', 'x axis');
const yaxis = d3.axisLeft().scale(yscale);
const g_yaxis = group.append('g').attr('class', 'y axis');
const bar_height = 100;


d3.json('https://rawgit.com/sgratzl/d3tutorial/master/examples/weather.json').then((json) => {
    data = json;
    update(data);
});

function update(new_data) {
    //update the scales
    xscale.domain([0, d3.max(new_data, (d) => d.temperature)]);
    yscale.domain(new_data.map((d) => d.location.city));
    //render the axis
    g_xaxis.call(xaxis);
    g_yaxis.call(yaxis);


    // Render the chart with new data

    // DATA JOIN
    const vierkant = group.selectAll('rect').data(new_data).join(
        // ENTER 
        // new elements
        (enter) => {
            const rect_enter = enter.append('rect').attr('x', 0);
            rect_enter.append('title');
            return rect_enter;
        },
        // UPDATE
        // update existing elements
        (update) => update,
        // EXIT
        // elements that aren't associated with data
        (exit) => exit.remove()
    );
    console.log(data[1].temperature)

    // ENTER + UPDATE
    // both old and new elements
    vierkant
        .attr('height', yscale.bandwidth())
        .attr('width', (d) => xscale(d.temperature))
        .attr('y', (d) => yscale(d.location.city));

    vierkant.select('title').text((d) => d.location.city);
}

d3.select('#filter-us-only').on('change', function () {
    const checked = d3.select(this).property('checked');
    if (checked === true) {
        const filtered_data = data.filter((d) => d.temperature >= '60');
        update(filtered_data)
    }
    else {
        update(data);
    }
});

