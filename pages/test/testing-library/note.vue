<template>
  <div>
    <strong
      >Lỗi “An update to ViewPipeline inside a test was not wrapped in act(…)” thường xảy
      ra khi bạn thực hiện các cập nhật trạng thái (state updates) trong các bài kiểm tra
      (tests) mà không sử dụng hàm act. Hàm act đảm bảo rằng tất cả các cập nhật trạng
      thái và các hiệu ứng phụ liên quan được hoàn thành trước khi các xác nhận
      (assertions) được thực hiện, giúp các bài kiểm tra của bạn phản ánh chính xác hành
      vi của ứng dụng.</strong
    >
    <h3>Cach khac phuc</h3>
    <p>
      Sử dụng act từ @testing-library/react or Sử dụng waitFor từ @testing-library/react
    </p>
    <code>
      {{
        `
      await act(async () => { 
      userEvent.click(screen.getByText('Update State')); 
      }); 
      // hoặc
      await act(async () => {
         userEvent.click(screen.getByText('Update State'));
        });`
      }}
    </code>
    <code>
      {{
        `// Sử dụng waitFor để đợi cho đến khi trạng thái được cập nhật
          await waitFor(() => {
            expect(screen.getByText('Updated State')).toBeInTheDocument();
            });`
      }}
    </code>

    <div>
      <a href="https://www.w3.org/TR/html-aria/#docconformance"> information getByRole</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
