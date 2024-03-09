/* eslint-disable react/prop-types */
export default function User({user}){
    const {id, name, username, email, address:{city}} = user;
    return (
        <div className="box">
            <h3>Id: {id}</h3>
            <h3>Name: {name}</h3>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            <h3>Address: {city}</h3>
        </div>
    )
}