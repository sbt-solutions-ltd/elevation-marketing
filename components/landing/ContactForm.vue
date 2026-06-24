<script setup lang="ts">
onMounted(() => {
  const form = document.getElementById("form") as HTMLFormElement | null;
  const result = document.getElementById("result") as HTMLElement | null;
  if (!form || !result) return;

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      (
        form.querySelectorAll(":invalid")[0] as HTMLElement | undefined
      )?.focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response: Response) => {
        const data = await response.json();
        if (response.status === 200) {
          result.classList.add("text-green-500");
          result.innerHTML = data.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = data.message;
        }
      })
      .catch((error: unknown) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(() => {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <!-- To make this contact form work, create your free access key from https://web3forms.com/
     Then you will get all form submissions in your email inbox. -->
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation"
    novalidate
  >
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
    <!-- Create your free access key from https://web3forms.com/ -->
    <input
      type="hidden"
      name="subject"
      value="New enquiry from Elevation Marketing website"
    />
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="grid sm:grid-cols-2 gap-5 mb-5">
      <div>
        <input
          type="text"
          placeholder="First Name"
          required
          class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="first_name"
        />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please provide your first name.
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          required
          class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="last_name"
        />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please provide your last name.
        </div>
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">Email Address</label
      ><input
        id="email_address"
        type="email"
        placeholder="Email Address"
        name="email"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your email address.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid email address.
      </div>
    </div>
    <div class="mb-5">
      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your phone number.
      </div>
    </div>
    <div class="mb-3">
      <textarea
        name="message"
        required
        maxlength="180"
        placeholder="Your Message"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please enter your message.
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>Send</LandingButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
