import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import  {faker} from '@faker-js/faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Dash=()=>{
    const options = {
        responsive: true,
        plugins: {
            legend: {
              position: 'top' ,
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart',
            },
          },
        
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

      
    return(
        <>
        <div className="container">
            <div className="row mt-3">
                
                <div className="col-3">
                    <div className="card"> 
                    <div className="bg-dark p-4 w-25  position-absolute card-icon-position rounded text-white">
                        <i className="fa-solid fa-money-bill  fa-lg"></i>
                    </div>
                        <div className="d-flex  justify-content-end">
                            <div className="p-3">
                                <span>Today's Money</span>
                                <h1>$53k</h1>
                            </div>
                        </div>
                        <div className="card-footer bg-white">
                            <p ><strong className="text-success">+55% </strong> than Last Week</p>
                        </div>
                         
                    </div>


                </div>
                <div className="col-3">
                <div className="card">
                <div className="bg-pink p-4 w-25  position-absolute card-icon-position rounded text-white">
                <i class="fa-solid fa-user fa-xl"></i>
                    </div> 
                        <div className="d-flex  justify-content-end">
                            <div className="p-3">
                                <span >Today's User</span>
                                <h1>2,530</h1>
                            </div>
                        </div>
                        <div className="card-footer bg-white">
                            <p ><strong className="text-success">+3% </strong> than Last Month</p>
                        </div>
                         
                    </div>


                    
                </div>
                <div className="col-3">
                    <div className="card"> 
                    <div className="bg-success p-4 w-25  position-absolute card-icon-position rounded text-white">
                    <i class="fa-solid fa-user fa-xl"></i>
                    </div>
                            <div className="d-flex  justify-content-end">
                                <div className="p-3">
                                    <span>New clients</span>
                                    <h1>3,456</h1>
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                                <p ><strong className="text-danger">+2% </strong>than Yesterday </p>
                            </div>
                            
                    </div>
                </div>

                <div className="col-3">
                    <div className="card rounded"> 
                    <div className="bg-primary p-4 w-25  position-absolute card-icon-position rounded text-white">
                        <i className="fa-solid fa-money-bill  fa-lg"></i>
                    </div>
                            <div className="d-flex  justify-content-end">
                                <div className="p-3">
                                    <span>Sales</span>
                                    <h1>$103,403</h1>
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                            <p ><strong className="text-success">+5% </strong>than Yesterday </p>
                            </div>
                            
                    </div>
                </div>
            </div>

            
                <div class="row mt-3">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header position-relative bg-white">
                                <div className="">

                                <Bar options={options} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                                <div className="card-header bg-white">
                                    <div className="">

                                    <Line options={options} data={data}/>
                                    </div>
                                </div>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="card">
                                <div className="card-header bg-white">
                                    <div className="">

                                    <Line options={options} data={data}/>
                                    </div>
                                </div>
                        </div>

                    </div>

                </div>

            </div>

        
        </>
    )

}
export default Dash;