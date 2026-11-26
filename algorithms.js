
function bubbleSort(array) {
    let list = [...array];

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - 1; j++) {
            if (list[j].toLowerCase() > list[j + 1].toLowerCase()) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }

    return list;
}
