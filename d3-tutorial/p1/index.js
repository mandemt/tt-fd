const margin = {top: 100, 
                bottom: 0,
                left: 100,
                right: 100}

const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const plaatje = d3.select('body').append('svg')
    .attr('width', width+margin.left + margin.right)
    .attr('height', height+margin.top + margin.bottom)

    const group = plaatje.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const data = [10,20,30,40,50,60];

    const bar_height = 100;

    const vierkant = group.selectAll('rect').data(data).join(
        (enter) => enter.append('rect').attr('x', 10),
        (update) => update,
        (exit) => exit.remove()
    );
    
vierkant
    .attr('height', bar_height)
    .attr('width', (a) => a * 7)
    .attr('y', (data, i) => i*(bar_height+5))