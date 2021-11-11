const margin = {top: 40, bottom: 10, left: 120, right: 20};
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const svg = d3.select('body').append('svg')
.attr('width', width+margin.left+margin.right)
.attr('height', height+margin.top+margin.bottom);

// Group used to enforce margin
const g = svg.append('g')
.attr('transform', `translate(${margin.left},${margin.top})`);


const xscale = d3.scaleLinear().range([0,500]);
const yscale = d3.scaleBand().range([0, 10]).paddingInner(0.1)

const xaxis = d3.axisTop().scale(xscale)
const yaxis = d3.axisLeft().scale(yscale);
const bar_height = 10;
const g_xaxis = g.append('g').attr('class', 'x axis');
const g_yaxis = g.append('g').attr('class', 'y axis');



const rect = g.selectAll('rect').data(data).join(
    (enter) => {
        const rect_enter = enter.append('rect').attr('x', 0)
        rect_enter.append('title')
        return rect_enter
    },
    (update) => update,
    (exit) => exit.remove() // als er te veel dom object zijn verwijder ze
);
update(data)

function update(new_data) {
    //update the scales
    xscale.domain([0, 10]);
    // yscale.domain([0]);
    g_xaxis.call(xaxis);
    g_yaxis.call(yaxis);


    // Render the chart with new data

    // DATA JOIN
    const vierkant = g.selectAll('rect').data(new_data).join(
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

    // ENTER + UPDATE
    // both old and new elements

    rect.select('title').text((d) => d[1]);

    rect.transition()
        .attr('height', yscale.bandwidth())
        .attr('width', (data) => xscale(data.zin) )
        .attr('y', (d,i) => i*(bar_height+5))
}




// Render the chart with new data

// DATA JOIN

// ENTER
// new elements

// ENTER + UPDATE
// both old and new elements

// EXIT