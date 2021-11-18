const margin = { top: 50, bottom: 50, left: 150, right: 50 };
const width = 500 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;


d3.select('select')
    .on('change', function () {
        let count = []
        const counts = []
        var geteldeArray = []

        let vraag = this.value

        data.forEach((filter, index) => {
            const variable = data[index][vraag]
            count.push(variable)
        })

        count.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });

        let getal = Object.keys(counts)
        let waarde = Object.values(counts)

        getal.forEach((x, index) => {

            const aantal = waarde[index];

            geteldeArray.push({
                "getal": x, "keer": aantal
            })
        })

        d3.select('input[type="range"]')
            .on('change', function () {
                let frequentie = this.value
                const filtered_data = geteldeArray.filter((d) => d.keer >= frequentie)
                update(filtered_data);
            });
        update(geteldeArray)
    })


const svg = d3.select('main').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

const xscale = d3.scaleLinear().range([0, width]);
const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1);

const xaxis = d3.axisTop().scale(xscale);
const g_xaxis = g.append('g').attr('class', 'x axis');
const yaxis = d3.axisLeft().scale(yscale);
const g_yaxis = g.append('g').attr('class', 'y axis');

svg.append("text")
    .attr("transform", "translate(10,250)rotate(90)")
    .style("text-anchor", "middle")
    .text('Variabele');


svg.append("text")
    .attr("transform", "translate(300,20)")
    .style("text-anchor", "middle")
    .text("Aantal keer voorgekomen in enquete");


function update(new_data) {

    xscale.domain([0, d3.max(new_data, (d) => d.keer)]);
    yscale.domain(new_data.map((d) => d.getal));
    g_xaxis.transition().call(xaxis);
    g_yaxis.transition().call(yaxis);

    const rect = g.selectAll('rect').data(new_data).join(

        (enter) => {

            const rect_enter = enter.append('rect').attr('x',0);
            return rect_enter;

        },
        (update) => update,

        (exit) =>

            exit.remove()

    );
    rect.transition()
        .attr('height', yscale.bandwidth())
        .attr('width', (d) => xscale(d.keer))
        .attr('y', (d) => yscale(d.getal))
    rect.select('title').text((d) => d.getal);
}






