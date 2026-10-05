`<form>
    <div class="grader">
        <input
        type="text"
        placeholder="class category"
        class="class-type"
        list="opt"
        value="${objectArray[i].class_name}"
        /><!--
        --><input
        type="text"
        placeholder="class number"
        class="class-number"
        value="${objectArray[i].class_number}"
        /><!--
        --><input
        type="number"
        placeholder="credits"
        min="0"
        max="6"
        class="class-credit"
        value="${objectArray[i].class_credit}"
        /><!--
        --><button class="trash-button">
        <i class="fas fa-trash"></i>
        </button>
    </div>
</form>`;
