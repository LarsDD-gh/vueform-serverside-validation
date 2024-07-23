import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import SampleForm from "~/components/sample-form.vue";

it("component is mounted", async () => {
  const component = mount(SampleForm);

  expect(component.emitted().mount).toBeTruthy();
  expect(component.emitted().form).toBeTruthy();
});
