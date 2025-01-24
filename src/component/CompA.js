//1. import area

//2.functional definition area
export default function CompA(props){ //formal argument

    let name='Ravi';

    //every function return something
    return(
        <h1>
            Good Afternoon, {name} {props.surname} {props.lastname} How are you
        </h1>
    )
}

//3.export area