import React from 'react'
import '../../App.css'
let arr = [
    { nama: 'Telolet', pekerjaan: 'Rapper' },
    { nama: 'Antok', pekerjaan: 'Netizen' }
]
const renderArr = () => {
    return arr.map((value,idx) => {
        return (
            <tr>
                <td>{idx+1}</td>
                <td>{value.nama}</td>
                <td>{value.pekerjaan}</td>
            </tr>
        )
    })
}


const TableProduct = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {renderArr()}
                </tbody>
            </table>
        </div>
    )
}
export default TableProduct

