var merge = function(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0,m);

    let p1 = 0;
    let p2 = 0;

    for(let i=0; i<m+n; i++){
        if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
            nums1[i] = nums1Copy[p1];
            p1 += 1;
        } else {
            nums1[i] = nums2[p2];
            p2 += 1;
        }
    }
    
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

let result = merge(nums1,m,nums2,n);