// function mergeSort(arr, l, r) {
//     let mid = parseInt((l + r) / 2);
//     if (l < r) {
//         mergeSort(arr, l, mid);
//         mergeSort(arr, mid + 1, r);
//         merge(arr, l, mid, r)
//     }
// }

// function merge(arr, l, mid, r) {
//     let temp = [];
//     let n = mid + 1;
//     let k = 0;
//     let i = l;
//     while (i <= mid && n <= r) {
//         if (arr[i] < arr[n]) {
//             temp[i++] = arr[l++];
//         }
//         if (arr[n] < arr[l]) {
//             temp[i++] = arr[n++];
//         }
//     }
//     for (; l <= mid; l++) {
//         temp[i++] = arr[l];
//     }
//     for (; n <= r; n++) {
//         temp[i++] = arr[n];
//     }
//     for (i = l, k = 0; i < temp.length; i++, k++) {
//         arr[i] = temp[k];
//     }
// }

// const arr = [2, 8, 0, 2, 3, 1, 4];

// mergeSort(arr, 0, 6);
// console.log(arr);

function mergeSort(arr, l, r) {
    if (l < r) {
        let mid = parseInt((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }
}

function merge(arr, l, mid, r) {
    let temp = [];
    let i = l, j = mid + 1, k = 0;

    while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= r) {
        temp[k++] = arr[j++];
    }

    for (i = l, k = 0; i <= r; i++, k++) {
        arr[i] = temp[k];
    }
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
