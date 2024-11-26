export const color = {
    primaryColor: "#0077B6",
    secondayColor: "#33C3E0",
    lightColor: "#90E0EF"
}

export const statusColor = (status) => {
    let color;
    switch(status) {
        case 'Berlangsung':
            color = 'bg-[#33C3E0]'
            break;
        case 'Menunggu Tim':
            color = 'bg-red-500'
            break;
        case 'Selesai':
            color = 'bg-green-500'
            break;
        default:
            color = 'bg-[##33C3E0]'
            break;
    }
    return color;
}