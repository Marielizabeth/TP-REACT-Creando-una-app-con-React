import React from 'react';
import PropTypes from 'prop-types';

const Contentrowmovies = ({title,color,amount,icon}) => {
    return (
           <div className="col-md-4 mb-4">
                <div className= {`card border-left-${color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={` text-xs font-weight-bold text-${color}text-uppercase mb-1`}>{title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{amount}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
    );
}

Contentrowmovies.propTypes = {
    title : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    amount : PropTypes.number.isRequired,
    icon : PropTypes.string.isRequired,
}

export default Contentrowmovies;

/* Fragment no ocupa espacio en la renderizacion, hace de padre para agrupar elementos hermanos/hijos, si tengo que usar varios DIV por ej 
import React, {Fragment} from 'react';
<Fragment></Fragment> */