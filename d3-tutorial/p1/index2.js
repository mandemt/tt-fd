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

const bar_height = 100;


d3.json('https://rawgit.com/sgratzl/d3tutorial/master/examples/weather.json').then((json) => {
    data = json;
    update(data);
});
function update(new_data) {


const vierkant = group.selectAll('rect').data(new_data).join(
    (enter) => {
        const titel = enter.append('rect').attr('x', 10);
    titel.append('title');
    return titel;
    },
    (update) => update,

    (exit) => exit.remove()
);

vierkant
    .attr('height', bar_height)
    .attr('width', (d) => d.temperature * 7)
    .attr('y', (data, i) => i * (bar_height + 5))
    vierkant.select('title').text((d) => d.location.city);
}