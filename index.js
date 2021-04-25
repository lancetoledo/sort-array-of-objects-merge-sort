// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Intialized variables
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  },
  {
    title: "10x",
    author: "Grant Cardone",
    libraryID: 3945
  },
  {
    title: "Limitless",
    author: "Jim Kwik",
    libraryID: 2936
  }
];

function sortBooks(arr, key) {
  //Intialzed an empty array to compare values relative to the object's keys to be sorted later
  let compareArr = [];
  //For loop iterates through the array to push the values of the keys
  for (let i = 0; i < arr.length; i++) {
    compareArr.push(arr[i][key]);
  }

  //Call the mergeSort function to sort the values in sorted
  let sort = mergeSort(compareArr);

  //Compare the sorted array with the original and replace the original with the order of elements in the sorted

  for (let i = 0; i < sort.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (sort[i] == arr[j][key]) {
        sort[i] = arr[j];
      }
    }
  }
  return sort;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  return sorted.concat(left.slice().concat(right.slice()));
}

console.log(sortBooks(library, "libraryID"));
