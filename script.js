function exibirLista(){
	window.document.getElementById("btnAdd").addEventListener("click", function(){
		let tabela = window.document.getElementById('lista');
		let tr = document.createElement("tr");
		let name = window.document.getElementById('nome');
		let tdNome = document.createElement("td");
		let age = window.document.getElementById('idade');
		let tdIdade = document.createElement("td");

		tabela.appendChild(tr);

		tdNome.textContent = name.value;
		tdIdade.textContent = age.value + " anos";

		tr.appendChild(tdNome);

		tr.appendChild(tdIdade);

		name.value = "";
		age.value = "";
		name.focus();
	});		
}

exibirLista();