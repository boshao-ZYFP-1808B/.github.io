import React from 'react';
export default (props) => {
    const { data, checked, handlechange, disabled } = props
    const { id, labels, type } = data
    const quxiao1 = disabled ? id === 1 ? false : true : ""
    return (
        <>
            {labels.map(item => {
                return <label key={item.id}>
                    <input
                        disabled={quxiao1}
                        type={type}
                        name={type === "radio" ? "radioLike" : "checkbox"}
                        value={type === "radio" ? item.value : item.id}
                        checked={type === "radio" ? checked === item.value : checked[item.id]}
                        onChange={handlechange} />
                    {item.label}
                </label>
            })}
        </>
    )
}