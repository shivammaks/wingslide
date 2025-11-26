function sum_avg() {
    var reviews = [5, 5, 4.5, 1, 3];
    var totalsum = 0;
    for (var i = 0; i < reviews.length; i++) {
        console.log(reviews[i]);
        totalsum += reviews[i];
    }
    var average = totalsum / reviews.length;
    console.log("review average=" + average);
    console.log(total);
}
sum_avg();

