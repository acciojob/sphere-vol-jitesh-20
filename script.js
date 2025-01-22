function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value
	 let radius = parseFloat(radiusInput);
	if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }
	let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volume = volume.toFixed(4);
	document.getElementById("volume").value = volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
