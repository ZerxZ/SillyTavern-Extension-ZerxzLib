import {
	eventSource,
	event_types,
} from "@silly-tavern/script";;
import {
	writeSecret,
} from "@silly-tavern/scripts/secrets";
import { getGeminiModel, getSecrets, isGeminiSource, saveKey, switchSecretsFromArray, throwGeminiError, STATE, CUSTOM_KEY, initGeminiModels, initToastr } from "./utils";

import { GeminiLayouts } from "layouts/GeminiLayouts";



async function createButton(title: string, onClick: () => void) {
	const div = document.createElement("div");
	div.classList.add("menu_button", "menu_button_icon", "interactable");
	div.title = title;
	div.onclick = onClick;
	const span = document.createElement("span");
	span.textContent = title;
	div.appendChild(span);
	return div;
}

; (async () => {
	initToastr();


	// 获取form元素 id为"makersuite_form"的元素 用jquery的选择器
	const secrets = (await getSecrets()) ?? {};
	await initGeminiModels(secrets);
	const form = $("#makersuite_form")[0];
	form.appendChild(new GeminiLayouts({
		currentKey: secrets.api_key_makersuite,
		lastKey: secrets[CUSTOM_KEY]?.split("\n").pop(),
		throwGeminiErrorState: STATE.throwGeminiErrorState,
		switchKeyMakerSuite: STATE.switchState,
		apiKeys: secrets[CUSTOM_KEY] || ""
	}));
	eventSource.on(
		event_types.CHAT_COMPLETION_SETTINGS_READY,
		switchSecretsFromArray,
	);
	eventSource.on(event_types.CHATCOMPLETION_MODEL_CHANGED, async (model: string) => {
		if (isGeminiSource()) await saveKey("api_key_makersuite_model", model);
	})
})();
