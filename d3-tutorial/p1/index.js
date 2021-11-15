const margin = {top: 40, bottom: 10, left: 120, right: 20};
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const svg = d3.select('body').append('svg')
.attr('width', width+margin.left+margin.right)
.attr('height', height+margin.top+margin.bottom);

const g = svg.append('g')
.attr('transform', `translate(${margin.left},${margin.top})`);
let count = []
data.forEach((nieuw, index)=> {
    const variable = data[index].zin
    count.push(variable)
})
const counts = []
count.forEach(function (x) {
     counts[x] = (counts[x] || 0) + 1; 

    });

    var filtered = counts.filter(function(value, index, arr){ 
        return value > 0;
    });
    console.log(filtered)
const bar_height = 50;



    
  update(filtered);

function update(new_data) {

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

  rect
    .attr('height', bar_height)
    .attr('y', (d, i) => i*(bar_height+5))
    .attr('width', (d) => d * 50)
  rect.select('title').text((d) => d);
    }
