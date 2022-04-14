install:
		npm ci

lint:
		npx eslint .
		
test:
		node --experimental-vm-modules "node_modules/.bin/jest"

test-coverage:
	npm test -- --coverage --coverageProvider=v8

gendiff:
	node bin/gendiff.js	