/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let ans = [];
    let k=0 ,l=0 ,i;     
    while(k<m && l <n){
        for(i=l;i<n;i++){
            ans.push(matrix[k][i])
        }
        k++;
        for(i=k;i<m;++i){
            ans.push(matrix[i][n-1])
        }
        n--;
        if(k<m){
            for(i=n-1;i>=l;--i){
                ans.push(matrix[m-1][i])
            }
         m--;   
        }
       
        if(l<n){
            for(i=m-1;i>=k;--i){
                ans.push(matrix[i][l])
            }
             l++;
        }
        
        
        
        
    } 
    return  ans;
    
};