# Pronto

Um aplicativo para te ajudar a focar e executar tarefas. Você pode adicionar
tarefas e então ir para uma tela especial, na qual o aplicativo te mostrará
apenas a próxima tarefa.

Por enquanto, este é o conceito do app, muito simples. Futuramente pretendo
implementar:

- Interrupções: você poderá trabalhar com tranquilidade porque quando um horário
  importante chegar o aplicativo vai te interromper e mudar qual a tarefa atual.
- Visão de calendário: onde você poderia ver todas as interrupções que estão
  marcadas.

# Running

1. Clone this repository.
2. Run `yarn install` or `npm install` from the project's folder.
3. Run `yarn dev` or `npm run dev` from the project's folder.

## Troubleshooting

If you see an error related to the static adapter try replacing the code from
`node_modules/@sveltejs/adapter-static/index.js` with

```javascript
'use strict';

module.exports = function ({ pages = 'build', assets = pages, fallback } = {}) {
	/** @type {import('@sveltejs/kit').Adapter} */
	const adapter = {
		name: '@sveltejs/adapter-static',

		async adapt({ utils }) {
			utils.copy_static_files(assets);
			utils.copy_client_files(assets);

			await utils.prerender({
				fallback,
				all: !fallback,
				dest: pages,
			});
		},
	};

	return adapter;
};
```
